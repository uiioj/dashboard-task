import TableLayout from "../TableLayout";
import CardLayout from "./CardLayout";
import team_01 from "../../images/team-01.png";
import team_02 from "../../images/team-02.png";
import team_03 from "../../images/team-03.png";
import team_04 from "../../images/team-04.png";
import team_05 from "../../images/team-05.png";

function Card13() {
  return (
    <>
      <CardLayout title="Projects">
        <div className="overflow-x-auto">
          <table className="w-full border border-[#faf7f7] m-4">
            {/**الهيدر */}
            <thead>
              <tr className="bg-[#eeeeee]">
                <th className="p-4">Name</th>
                <th className="p-4">Finish Date</th>
                <th className="p-4">Client</th>
                <th className="p-4">Price</th>
                <th className="p-4">Team</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/**الصف الأول */}
              <TableLayout
                name="Ministry Wikipedia"
                finishDate="10 May 2022"
                client="Ministry"
                price="$5300"
                status="Pending"
                buttonBg="bg-[#f59e0b]"
              >
                <img src={team_01} className="w-8 h-8 rounded-full  shrink-0" />
                <img src={team_02} className="w-8 h-8 rounded-full  shrink-0" />
                <img src={team_03} className="w-8 h-8 rounded-full  shrink-0" />
                <img src={team_05} className="w-8 h-8 rounded-full  shrink-0" />
              </TableLayout>

              {/**الصف الثاني */}
              <TableLayout
                name="Elzero Shop"
                finishDate="12 Oct 2021"
                client="Elzero Company"
                price="$1500"
                status="In Progress"
                buttonBg="bg-[#0075ff]"
              >
                <img src={team_01} className="w-8 h-8 rounded-full" />
                <img src={team_02} className="w-8 h-8 rounded-full" />
                <img src={team_05} className="w-8 h-8 rounded-full" />
              </TableLayout>

              {/**الصف الثالث */}
              <TableLayout
                name="Bouba App"
                finishDate="05 Sep 2021"
                client="Bouba"
                price="$800"
                status="Completed"
                buttonBg="bg-[#25c65f]"
              >
                <img src={team_02} className="w-8 h-8 rounded-full" />
                <img src={team_03} className="w-8 h-8 rounded-full" />
              </TableLayout>

              {/**الصف الرابع */}
              <TableLayout
                name="Mahmoud Website"
                finishDate="22 May 2021"
                client="Mahmoud"
                price="$600"
                status="Completed"
                buttonBg="bg-[#25c65f]"
              >
                <img src={team_01} className="w-8 h-8 rounded-full" />
                <img src={team_02} className="w-8 h-8 rounded-full" />
              </TableLayout>

              {/**الصف الخامس */}
              <TableLayout
                name="Sayed Website"
                finishDate="24 May 2021"
                client="Sayed"
                price="$300"
                status="Rejected"
                buttonBg="bg-[#f44336]"
              >
                <img src={team_01} className="w-8 h-8 rounded-full shrink-0" />
                <img src={team_03} className="w-8 h-8 rounded-full" />
              </TableLayout>

              {/**الصف السادس */}
              <TableLayout
                name="Arena Application"
                finishDate="01 Mar 2021"
                client="Arena Company"
                price="$2600"
                status="Completed"
                buttonBg="bg-[#25c65f]"
              >
                <img src={team_04} className="w-8 h-8 rounded-full" />
                <img src={team_03} className="w-8 h-8 rounded-full" />
                <img src={team_02} className="w-8 h-8 rounded-full" />
                <img src={team_01} className="w-8 h-8 rounded-full" />
              </TableLayout>
            </tbody>
          </table>
        </div>
      </CardLayout>
    </>
  );
}

export default Card13;
