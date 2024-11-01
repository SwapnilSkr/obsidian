import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Heroes = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/home-hero-light.png"
          width={852}
          height={260}
          alt="hero"
          className="dark:hidden"
        />
        <Image
          src="/home-hero-dark.png"
          width={852}
          height={260}
          alt="hero-dark"
          className="hidden dark:block"
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-28">
        <h2 className="text-6xl font-bold">Get started for free</h2>
        <p className="pt-4">
          Play around with it first. Get used to it for yourself.
        </p>
        <div className="flex justify-center space-x-3 pt-5">
          <Button asChild>
            <Link href="/documents">Try Obsidian free</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/documents" className="text-sky-500">
              Use Obsidian now <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
        <Image
          src="/motion-parade-light.png"
          width={670}
          height={330}
          alt="hero"
          className="pt-7 dark:hidden"
        />
        <Image
          src="/motion-parade-dark.png"
          width={670}
          height={330}
          alt="hero"
          className="pt-7 hidden dark:block"
        />
      </div>
    </div>
  );
};

export default Heroes;
