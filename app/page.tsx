import { entries, dataMeta } from "@/data/timeline";
import { cadenceByQuarter } from "@/lib/metrics";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FirstScreen } from "@/components/FirstScreen";
import { DamalsHeute } from "@/components/DamalsHeute";
import { KeyStats } from "@/components/KeyStats";
import { Intro } from "@/components/Intro";
import { Timeline } from "@/components/Timeline";
import { CadenceChart } from "@/components/CadenceChart";
import { HumanProgress } from "@/components/HumanProgress";
import { OpenVsClosed } from "@/components/OpenVsClosed";
import { SchonVergessen } from "@/components/SchonVergessen";
import { Closing } from "@/components/Closing";
import { SnipkiBridge } from "@/components/SnipkiBridge";
import { MidCTA } from "@/components/MidCTA";
import { StructuredData } from "@/components/StructuredData";
import { homeGraph } from "@/lib/schema";

export default function Page() {
  const buckets = cadenceByQuarter(entries);
  const windowLabel = "Ende 2022 — 2026";
  const today = "2026-06-30";

  return (
    <main className="relative">
      <StructuredData json={homeGraph(entries, dataMeta.lastVerifiedISO)} />
      <ScrollProgress />
      <FirstScreen />
      <DamalsHeute />
      <KeyStats entries={entries} today={today} />
      <CadenceChart buckets={buckets} />
      <HumanProgress />
      <MidCTA />
      <Intro />
      <Timeline entries={entries} />
      <SnipkiBridge />
      <OpenVsClosed entries={entries} />
      <SchonVergessen />
      <Closing
        total={entries.length}
        disputed={entries.filter((e) => e.disputed).length}
        lastVerified={dataMeta.lastVerified}
        windowLabel={windowLabel}
      />
    </main>
  );
}
