import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Charts({ simulatedProjection }: { simulatedProjection: { month: number; val: number; baseline: number }[] }) {
  const labels = simulatedProjection.map(p => `M${p.month}`);

  // Internal state allows animation controls (play/pause/randomize)
  const [running, setRunning] = useState(false);
  const [lineData, setLineData] = useState(() => ({
    labels,
    datasets: [
      {
        label: 'Zivara Path',
        data: simulatedProjection.map(p => p.val),
        borderColor: '#c8a96e',
        backgroundColor: 'rgba(200,169,110,0.12)',
        tension: 0.35,
        fill: true,
        pointRadius: 3
      },
      {
        label: 'Baseline',
        data: simulatedProjection.map(p => p.baseline),
        borderColor: 'rgba(255,255,255,0.12)',
        borderDash: [6,6],
        backgroundColor: 'transparent',
        tension: 0.35,
        pointRadius: 0
      }
    ]
  }));

  const [barData, setBarData] = useState(() => ({
    labels,
    datasets: [
      {
        label: 'Monthly Value',
        data: simulatedProjection.map(p => Math.round((p.val - p.baseline) / 1000)),
        backgroundColor: labels.map((_,i) => i%2===0? 'rgba(200,169,110,0.7)' : 'rgba(200,169,110,0.35)')
      }
    ]
  }));

  const donutData = useMemo(() => ({
    labels: ['Automation', 'Manual', 'Retention Impact'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ['#c8a96e', '#7c7a78', '#3ecf8e'],
        hoverOffset: 8
      }
    ]
  }), []);

  // Keep track of a ref for animation interval
  const intervalRef = useRef<number | null>(null);

  // Smoothly animate internal datasets towards incoming props when they change
  useEffect(() => {
    const target = simulatedProjection.map(p => p.val);
    const baseTarget = simulatedProjection.map(p => p.baseline);

    // simple easing steps to move current state towards target
    let raf = 0;
    const steps = 18;
    const startLine = lineData.datasets[0].data as number[];
    const startBase = lineData.datasets[1].data as number[];

    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      setTimeout(() => {
        setLineData(prev => ({
          ...prev,
          datasets: [
            { ...prev.datasets[0], data: target.map((v, i) => Math.round(startLine[i] + (v - startLine[i]) * t)) },
            { ...prev.datasets[1], data: baseTarget.map((v, i) => Math.round(startBase[i] + (v - startBase[i]) * t)) }
          ]
        }));
        setBarData(prev => ({
          ...prev,
          datasets: [{ ...prev.datasets[0], data: simulatedProjection.map(p => Math.round((p.val - p.baseline) / 1000)) }]
        }));
      }, s * 28);
      raf = s;
    }

    return () => { if (raf) window.clearTimeout(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simulatedProjection]);

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#c0b9ae' } },
      title: { display: false }
    },
    scales: {
      x: { ticks: { color: '#8a8278' } },
      y: { ticks: { color: '#8a8278' } }
    }
  };

  const handleRandomize = () => {
    // jitter the path to show animation
    setLineData(prev => ({
      ...prev,
      datasets: [
        { ...prev.datasets[0], data: prev.datasets[0].data.map((v: any) => Math.round((v as number) * (0.9 + Math.random() * 0.2))) },
        prev.datasets[1]
      ]
    }));
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        // rotate data to the left and add a small growth at end
        setLineData(prev => {
          const d = (prev.datasets[0].data as number[]).slice();
          d.shift();
          const last = d[d.length - 1] || 0;
          d.push(Math.round(last * (1 + (Math.random() - 0.45) * 0.03)));
          return { ...prev, datasets: [{ ...prev.datasets[0], data: d }, prev.datasets[1]] };
        });
      }, 700);
    } else {
      if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
    }
    return () => { if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; } };
  }, [running]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-3 flex items-center justify-end gap-3">
        <button onClick={() => setRunning(r => !r)} className="px-3 py-1 text-sm bg-[#0d0d0d] border border-white/5 rounded">{running ? 'Pause' : 'Animate'}</button>
        <button onClick={handleRandomize} className="px-3 py-1 text-sm bg-[#0d0d0d] border border-white/5 rounded">Randomize</button>
      </div>
      <div className="col-span-2 bg-[#090909] p-3 rounded h-56 transform-gpu perspective-1000 card-3d">
        <div className="w-full h-full rounded" style={{ transformStyle: 'preserve-3d' }}>
          <Line data={lineData} options={{...commonOptions, animation: { duration: 600, easing: 'easeOutQuart' }}} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-[#090909] p-3 rounded h-28 chart-wrap">
          <Bar data={barData} options={{...commonOptions, scales: {x: {display:false}, y:{display:false}}, animation: { duration: 450 }}} />
        </div>
        <div className="bg-[#090909] p-3 rounded h-28 chart-wrap">
          <Doughnut data={donutData} options={{...commonOptions, plugins:{legend:{position:'bottom'}}, animation: { duration: 600 }}} />
        </div>
      </div>
    </div>
  );
}
