import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PainPoints() {
  return (
    <section className="px-4 py-10">
      <div className="container m-auto">
        <h2></h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="bg-transparent backdrop-blur-lg">
            <CardHeader className="flex gap-2">
              <div className="bg-muted grid aspect-square place-content-center rounded-md p-2 text-3xl">
                🧠
              </div>
              <div>
                <CardTitle>Stand Out</CardTitle>
                <CardDescription>
                  Custom experience that sets you apart from the crowd
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
