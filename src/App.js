import React from 'react';
import './style.css';

export default function App() {
  const data = [
    {
      'Key Translation': 'CheckAchievement',
      English: 'Check Achievement',
      'Chinese Simplified': '查询业绩',
      'Chinese Traditional': '查詢業績',
      Malay: 'Semak Pencapaian',
    },
    {
      'Key Translation': 'Qualified',
      English: 'Qualified',
      'Chinese Simplified': '合格',
      'Chinese Traditional': '合格',
      Malay: 'Berkelayakan',
    },
    {
      'Key Translation': 'Unqualified',
      English: 'Unqualified',
      'Chinese Simplified': '不合格',
      'Chinese Traditional': '不合格',
      Malay: 'Tidak layak',
    },
    {
      'Key Translation': 'DirectSponsor',
      English: 'Direct Sponsor',
      'Chinese Simplified': '直推',
      'Chinese Traditional': '直推',
      Malay: 'Penaja Langsung',
    },
    {
      'Key Translation': 'Reinvestment',
      English: 'Reinvestment',
      'Chinese Simplified': '再投资',
      'Chinese Traditional': '再投資',
      Malay: 'Pelaburan semula',
    },
    {
      'Key Translation': 'TotalDeposit',
      English: 'Total Deposit',
      'Chinese Simplified': '入金总额',
      'Chinese Traditional': '入金總額',
      Malay: 'Jumlah Deposit',
    },
    {
      'Key Translation': 'SponsorMembers',
      English: 'Sponsor Members',
      'Chinese Simplified': '推荐成员',
      'Chinese Traditional': '推薦成員',
      Malay: 'Ahli Penaja',
    },
    {
      'Key Translation': 'JoinDate',
      English: 'Join Date',
      'Chinese Simplified': '加入日期',
      'Chinese Traditional': '加入日期',
      Malay: 'Tarikh menyertai',
    },
    {
      'Key Translation': 'NoData',
      English: 'No Data',
      'Chinese Simplified': '没有数据',
      'Chinese Traditional': '沒有數據',
      Malay: 'Tiada data',
    },
  ];

  const en = {},
    zh = {},
    tw = {},
    hi = {},
    ja = {},
    ko = {},
    ms = {},
    th = {},
    vi = {};

  //  "Key Translation": "TotalMember",
  //  "English": "Total member",
  //  "Chinese Simplified": "会员总数",
  //  "Chinese Traditional": "會員總數",
  //  "Hindi": "कुल सदस्य ",
  //  "Japan": "会員総数",
  //  "Korean": "총 회원 수",
  //  "Malay": "Jumlah ahli",
  //  "Thai": "สมาชิกทั้งหมด",
  //  "Vietnamese": "Tổng số thành viên"

  data.forEach((item) => {
    en[item['Key Translation']] = item['English'];
    zh[item['Key Translation']] = item['Chinese Simplified'] || item['English'];
    tw[item['Key Translation']] =
      item['Chinese Traditional'] || item['English'];
    hi[item['Key Translation']] = item['Hindi'] || item['English'];
    ja[item['Key Translation']] = item['Japan'] || item['English'];
    ko[item['Key Translation']] = item['Korean'] || item['English'];
    ms[item['Key Translation']] = item['Malay'] || item['English'];
    th[item['Key Translation']] = item['Thai'] || item['English'];
    vi[item['Key Translation']] = item['Vietnamese'] || item['English'];
  });

  console.log(vi);

  const display = zh;
  return (
    <div>
      {Object.keys(display).map((keyTranslate) => {
        return (
          <div>
            "{keyTranslate}":"{display[keyTranslate]}"
          </div>
        );
      })}
    </div>
  );
}
