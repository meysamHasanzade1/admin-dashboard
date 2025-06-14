import React from "react";
import Card from "../ui/dashboard/card/Card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/Rightbat/Rightbat";

function Dashboard() {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex flex-1/3 flex-col gap-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div style={{ flex: 1 }}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
