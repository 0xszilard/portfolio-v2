import { CheckCircle, Code } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Script from "next/script";

export default function Hero() {
  return (
    <section className="from-muted to-background relative bg-gradient-to-tr px-4 md:px-10">
      <div className="m-auto grid max-w-6xl gap-8 border-x px-2 pt-10 pb-20 md:px-10 lg:grid-cols-2 lg:gap-8">
        <div className="from-background to-background/0 absolute top-0 left-0 z-10 h-10 w-full bg-gradient-to-b" />
        <div className="flex flex-col items-center lg:items-start">
          <Badge variant="outline" className="mb-2">
            <Code size={12} className="mr-2" />
            Full-Stack Development Agency
          </Badge>
          <h1 className="mb-1 text-center text-3xl font-extrabold text-balance filter md:text-4xl md:font-bold lg:text-left">
            We Turn Your Ideas Into{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              Revenue-Generating
            </span>{" "}
            Machines
          </h1>
          <p className="text-muted-foreground mb-3 text-center text-lg lg:text-left">
            We build high-performance web applications that drive business
            growth. From MVP to enterprise scale, we deliver results that matter
            to your bottom line.
          </p>
          <div className="mb-5 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">
                Launch in 2-4 weeks, not months
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">
                Built for scale with modern tech stack
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">
                Ongoing support & maintenance included
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="unstyled"
              className="mx-auto flex h-[unset] transform cursor-pointer border border-gray-600 bg-gradient-to-t from-gray-800 to-gray-600 px-4 py-2 text-center font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:scale-102 active:scale-95 dark:border-gray-100 dark:from-gray-300 dark:to-gray-100 dark:text-black"
            >
              Book a Free Discovery Call
            </Button>
            <Button variant="outline">View Our Previous Works</Button>
          </div>
        </div>
        <div className="flex items-center">
          <Script src="https://fast.wistia.com/player.js" async />
          <Script
            src="https://fast.wistia.com/embed/q91qufujce.js"
            async
            type="module"
          />
          <style>
            {`
            wistia-player[media-id='q91qufujce']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/q91qufujce/swatch');
                display: block;
                filter: blur(5px);
                padding-top:56.25%;
            }
            `}
          </style>
          <wistia-player
            media-id="q91qufujce"
            aspect="1.7777777777777777"
          ></wistia-player>
        </div>
      </div>

      <hr className="absolute bottom-14 left-0 w-full" />

      <div className="from-background to-background/0 absolute bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t">
        <div className="m-auto w-full max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">200+</div>
              <div className="text-muted-foreground text-sm">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">2.5x</div>
              <div className="text-muted-foreground text-sm">
                Average ROI Increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">24/7</div>
              <div className="text-muted-foreground text-sm">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
