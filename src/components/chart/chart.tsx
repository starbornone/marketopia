"use client";

import * as React from "react";
import { Chart as ChartComponent, registerables } from "chart.js";
import { useEffect, useRef } from "react";

ChartComponent.register(...registerables);

type ChartProps = {
  dataA: number;
  dataB: number;
  label: string;
  labels: string[];
};

export const Chart: React.FC<ChartProps> = ({
  dataA,
  dataB,
  label,
  labels,
}) => {
  const chartRef = useRef<ChartComponent | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx && !chartRef.current) {
        chartRef.current = new ChartComponent(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: label,
                data: [dataA, dataB],
                backgroundColor: [
                  "rgba(85, 65, 125, 1)",
                  "rgba(200, 50, 70, 1)",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else if (chartRef.current) {
        chartRef.current.data.datasets[0].data = [dataA, dataB];
        chartRef.current.update();
      }
    }
  }, [dataA, dataB]);

  return <canvas ref={canvasRef} />;
};
