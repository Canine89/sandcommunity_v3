'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      'http://localhost:8000/book/daterange?year=2023&month=12&day=22'
    ).then((res) => {
      return res.json();
    });
    const initData = res.slice(0, 20).map((data) => {
      return data;
    });
    setData(initData);
    console.log(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map((d) => {
    return (
      <>
        <p>{d.book.author}</p>
        <p>{d.book.title}</p>
        <p>{d.rank}</p>
      </>
    );
  });
}
