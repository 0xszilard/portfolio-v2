import { Star, Users, Zap } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-muted/30 border-b">
      <div className="m-auto max-w-3xl px-4 py-3">
        <div className="text-muted-foreground flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 Client Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>30+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>2-Week Average Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
