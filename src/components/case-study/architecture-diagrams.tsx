import { DiagramFrame, Box, Flow } from "./diagram-primitives";

function BinarySyncDiagram() {
  return (
    <DiagramFrame caption="BinarySync — delta-sync protocol between client and cloud">
      <Box x={40} y={140} width={130} height={60} label="Client" sub="declares local chunks" />
      <Box x={250} y={140} width={170} height={60} label="Sync API" sub="Spring Boot" />
      <Box x={520} y={80} width={170} height={60} label="Chunk Store" sub="AWS S3 · SHA-256 addressed" />
      <Box x={520} y={210} width={170} height={60} label="Manifest" sub="H2 · version history" />
      <Flow from={{ x: 170, y: 170 }} to={{ x: 250, y: 170 }} />
      <Flow from={{ x: 420, y: 160 }} to={{ x: 520, y: 105 }} />
      <Flow from={{ x: 420, y: 180 }} to={{ x: 520, y: 235 }} />
    </DiagramFrame>
  );
}

function NeuroScreenDiagram() {
  return (
    <DiagramFrame caption="NeuroScreen — multimodal screening pipeline">
      <Box x={40} y={70} width={150} height={60} label="Behavioral Questionnaire" sub="AQ-style instrument" />
      <Box x={40} y={220} width={150} height={60} label="Skeletal Motion Analysis" sub="ST-GCN" />
      <Box x={290} y={140} width={160} height={60} label="Risk Assessment" sub="FastAPI" />
      <Box x={550} y={70} width={160} height={60} label="Therapy Recommendations" sub="LLM-assisted" />
      <Box x={550} y={220} width={160} height={60} label="Progress Tracking" sub="longitudinal" />
      <Flow from={{ x: 190, y: 100 }} to={{ x: 290, y: 155 }} />
      <Flow from={{ x: 190, y: 250 }} to={{ x: 290, y: 190 }} />
      <Flow from={{ x: 450, y: 155 }} to={{ x: 550, y: 100 }} />
      <Flow from={{ x: 450, y: 175 }} to={{ x: 550, y: 245 }} />
    </DiagramFrame>
  );
}

function AisoDiagram() {
  return (
    <DiagramFrame caption="AI Service Orchestrator — declarative workflow execution">
      <Box x={40} y={140} width={110} height={60} label="User" />
      <Box x={220} y={140} width={150} height={60} label="Workflow YAML" sub="declarative DAG" />
      <Box x={440} y={140} width={160} height={60} label="Execution Engine" sub="retry · branch · parallel" />
      <Box x={660} y={70} width={110} height={50} label="Provider A" sub="OpenAPI" />
      <Box x={660} y={220} width={110} height={50} label="Provider B" sub="OpenAPI" />
      <Flow from={{ x: 150, y: 170 }} to={{ x: 220, y: 170 }} />
      <Flow from={{ x: 370, y: 170 }} to={{ x: 440, y: 170 }} />
      <Flow from={{ x: 600, y: 155 }} to={{ x: 660, y: 92 }} />
      <Flow from={{ x: 600, y: 185 }} to={{ x: 660, y: 245 }} />
    </DiagramFrame>
  );
}

function PrintingShopDiagram() {
  return (
    <DiagramFrame caption="Printing Shop — cross-platform order workflow">
      <Box x={40} y={140} width={140} height={60} label="Flutter App" sub="iOS + Android" />
      <Box x={270} y={140} width={170} height={60} label="Backend API" sub="Spring Boot" />
      <Box x={540} y={50} width={190} height={50} label="Cloudflare R2" sub="document storage" />
      <Box x={540} y={145} width={190} height={50} label="Razorpay" sub="payments" />
      <Box x={540} y={240} width={190} height={50} label="Firebase" sub="auth + notifications" />
      <Flow from={{ x: 180, y: 170 }} to={{ x: 270, y: 170 }} />
      <Flow from={{ x: 440, y: 155 }} to={{ x: 540, y: 72 }} />
      <Flow from={{ x: 440, y: 170 }} to={{ x: 540, y: 170 }} />
      <Flow from={{ x: 440, y: 185 }} to={{ x: 540, y: 265 }} />
    </DiagramFrame>
  );
}

function EvaDiagram() {
  return (
    <DiagramFrame caption="Evidence Verification Agent — multimodal evidence verification pipeline">
      <Box x={30} y={140} width={110} height={60} label="Media" sub="video + news" />
      <Box x={190} y={140} width={130} height={60} label="CNN Detection" sub="deepfake analysis" />
      <Box x={370} y={140} width={150} height={60} label="Evidence Retrieval" sub="source grounding" />
      <Box x={570} y={140} width={130} height={60} label="LLM Assessment" sub="credibility" />
      <Box x={730} y={140} width={60} height={60} label="Ext." sub="browser" />
      <Flow from={{ x: 140, y: 170 }} to={{ x: 190, y: 170 }} />
      <Flow from={{ x: 320, y: 170 }} to={{ x: 370, y: 170 }} />
      <Flow from={{ x: 520, y: 170 }} to={{ x: 570, y: 170 }} />
      <Flow from={{ x: 700, y: 170 }} to={{ x: 730, y: 170 }} />
    </DiagramFrame>
  );
}

const diagrams: Record<string, () => React.ReactElement> = {
  binarysync: BinarySyncDiagram,
  neuroscreen: NeuroScreenDiagram,
  "ai-service-orchestrator": AisoDiagram,
  "printing-shop": PrintingShopDiagram,
  eva: EvaDiagram,
};

export function ArchitectureDiagram({ slug }: { slug: string }) {
  const Diagram = diagrams[slug];
  if (!Diagram) return null;
  return <Diagram />;
}
