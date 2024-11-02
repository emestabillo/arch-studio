import arrow from "../../public/icons/icon-arrow.svg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      Hello
      <Button
        text="Click me"
        href="/about"
        // onClick={() => console.log("Button clicked")}
      />
      <Button icon={arrow} />
      <Button text={"02"} variant="light" />
    </main>
  );
}
