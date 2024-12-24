import Hello from "../components/hello";

export default function Home() {
  console.log("What am i?")

  return (
    <> <h2 className="text-3xl">Welcome bro</h2>
       <Hello />
    </>

  );
}
