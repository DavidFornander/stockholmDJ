import TimeLine from "@/components/pages/about/sections/timeline/TimeLine";
// import TeamMembers from "@/components/pages/about/sections/team/TeamMembers";
import GroupImage from "@/components/pages/about/sections/groupimage/GroupImage";
// import SoundCloud from "@/components/pages/about/sections/soundcloud/Soundcloud";

export default function About() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <GroupImage />
      {/* <TeamMembers /> */}
      {/* <SoundCloud /> */}
      <TimeLine />
    </div>
  );
}
