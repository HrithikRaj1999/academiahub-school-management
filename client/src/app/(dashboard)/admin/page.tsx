import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/calender/EventCalender";
import AttendanceChart from "@/components/chart/AttendanceChart";
import CountChart from "@/components/chart/CountCharts";
import FinanceChart from "@/components/chart/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="px-2 flex gap-4 flex-col  md:flex-row md:max-h-[90%] md:h-[90%]  ">
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 md:overflow-scroll scrollbar-hide">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            {/* <CountChart /> */}
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            {/* <AttendanceChart /> */}
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */} 
      <div className="flex-grow lg:w-1/3 overflow-y-auto md:overflow-scroll scrollbar-hide">
        <EventCalendar />

        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
