"use client";
import React from "react";
import Card from "../ui/dashboard/card/Card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/Rightbat/Rightbat";
import RightbarMobile from "../ui/dashboard/RightbarMob/page";

function Dashboard() {
  return (
    <div>
      <div className="flex gap-[20px] mt-[20px] max-sm:block lg:ml-80 max-lg:mb-40 max-sm:mb-54">
        <div className="flex flex-1/3 flex-col gap-[20px] max-sm:items-center">
          <div className="flex gap-[20px] justify-between">
            <Card />
            <Card />
            <Card />
          </div>
          <Transaction />
          <Chart />
        </div>
        <div className="lg:flex-1">
          <Rightbar />
        </div>
      </div>
      <div className="bg-amber-200 ml-0 lg:ml-80 lg:hidden">
        <RightbarMobile />
      </div>
    </div>
  );
}

export default Dashboard;
