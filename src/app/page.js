import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Image
        src="/black-rms.svg"
        alt="risk my style dogs logo"
        width={300}
        height={300}
      />
      <h2 style={{ marginTop: "24px", color: "#333" }}>coming soon</h2>
    </div>
  );
}
