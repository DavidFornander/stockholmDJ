import GroupImage from "@/components/pages/about/sections/groupimage/GroupImage";
import TimeLine from "@/components/pages/about/sections/timeline/TimeLine";
// import TeamMembers from "@/components/pages/about/sections/team/TeamMembers";
// import SoundCloud from "@/components/pages/about/sections/soundcloud/Soundcloud";

export default function About(): JSX.Element {
  return (
    <div className="mx-auto flex flex-col items-center bg-white dark:bg-black transition-colors duration-200">
      <GroupImage />
      {/* <TeamMembers /> */}
      {/* <SoundCloud /> */}
      <TimeLine />
    </div>
  );
}
