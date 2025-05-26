import { Safari } from "../magicui/safari";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="from-muted to-background relative bg-gradient-to-tr px-4 md:px-10">
      <div className="m-auto grid gap-8 border-x px-2 py-20 md:px-10 lg:grid-cols-2 lg:gap-8">
        <div className="from-background to-background/0 absolute top-0 left-0 z-10 h-10 w-full bg-gradient-to-b" />
        <hr className="absolute top-10 left-0 w-full" />
        <div className="flex flex-col items-center lg:items-start">
          <Badge variant="outline" className="mb-2">
            ✨ Software Engineering
          </Badge>
          <h1 className="mb-1 text-center text-3xl font-extrabold text-balance filter md:text-4xl md:font-bold lg:text-left dark:drop-shadow-[0_4px_8px_rgba(59,130,246,0.7)]">
            I Build Custom Software That Makes You Stand Out, Scale Fast, &
            Systematize Everything For You
          </h1>
          <p className="text-muted-foreground mb-3 text-center text-lg text-balance lg:text-left">
            I turn your ideas into conversion-optimized digital platforms that
            grow with your brand – no tech overwhelm, just results.
          </p>

          <a
            href="/#contact"
            className="mx-auto flex w-full transform cursor-pointer flex-col rounded-lg border-2 border-gray-600 bg-gradient-to-t from-gray-800 to-gray-600 px-4 py-2 text-center font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:scale-102 active:scale-95 dark:border-gray-100 dark:from-gray-300 dark:to-gray-100 dark:text-black"
          >
            Get In Touch
            <span className="text-background/80 text-xs font-medium">
              No hard pitch. Just a real conversation
            </span>
          </a>
        </div>
        <div className="relative">
          <Safari
            url="infobridge.dev"
            imageSrc="https://images.unsplash.com/photo-1746469471553-afa9f34157fd"
            className="size-full"
          />
        </div>
      </div>

      <hr className="absolute bottom-14 left-0 w-full" />
      <div className="from-background to-background/0 absolute bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t" />
    </section>
  );
}
