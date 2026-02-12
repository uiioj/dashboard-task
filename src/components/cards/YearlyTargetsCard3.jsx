import CardLayout from "./CardLayout";
import YearlyTarget from "../YearlyTarget";

function Card3() {
  return (
    <>
      <CardLayout title="Yearly Targets" text="Targets Of The Year">
        <div className="flex flex-col">
          {/**Money */}
          <YearlyTarget
            image="src/images/Money.png"
            title="Money"
            amount="$20.000"
            bgColor="#cbe1fd"
            progressColor="#0075ff"
            progressWidth="80%"
            numOfProgress="80%"
          />

          {/**Projects */}
          <YearlyTarget
            image="src/images/Projects.png"
            title="Projects"
            amount="24"
            bgColor="#fceccf"
            progressColor="#f0a030"
            progressWidth="55%"
            numOfProgress="55%"
          />

          {/**Team */}

          <YearlyTarget
            image="src/images/Team.png"
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

export default Card3;
