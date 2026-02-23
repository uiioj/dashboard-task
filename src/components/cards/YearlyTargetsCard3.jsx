import CardLayout from "./CardLayout";
import YearlyTarget from "../YearlyTarget";
import projects from "../../images/Projects.png";
import money from "../../images/Money.png";
import team from "../../images/Team.png";

function YearlyTargetsCard3() {
  return (
    <>
      <CardLayout title="Yearly Targets" text="Targets Of The Year">
        <div className="flex flex-col">
          {/**Money */}
          <YearlyTarget
            image={money}
            title="Money"
            amount="$20.000"
            bgColor="#cbe1fd"
            progressColor="#0075ff"
            progressWidth="80%"
            numOfProgress="80%"
          />

          {/**Projects */}
          <YearlyTarget
            image={projects}
            title="Projects"
            amount="24"
            bgColor="#fceccf"
            progressColor="#f0a030"
            progressWidth="55%"
            numOfProgress="55%"
          />

          {/**Team */}

          <YearlyTarget
            image={team}
            title="Team"
            amount="12"
            bgColor="#d5f2e0"
            progressColor="#3ac363"
            progressWidth="75%"
            numOfProgress="75%"
          />
        </div>
      </CardLayout>
    </>
  );
}

export default YearlyTargetsCard3;
