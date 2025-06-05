import React from "react";

export default function BookingFaq() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold">How long is the consultation?</h3>
              <p className="text-muted-foreground text-sm">
                Free strategy sessions are 45 minutes, technical audits are 60 minutes, and enterprise consultations are
                90 minutes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">What if I'm not ready to start immediately?</h3>
              <p className="text-muted-foreground text-sm">
                That's perfectly fine! Our consultations are designed to help you plan and prepare, regardless of your
                timeline.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Do you sign NDAs?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. We're happy to sign your NDA before the consultation to ensure your ideas remain
                confidential.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold">What happens after the consultation?</h3>
              <p className="text-muted-foreground text-sm">
                You'll receive a detailed follow-up email with our recommendations, estimated timeline, and a custom
                proposal if you decide to move forward.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Can I reschedule if needed?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, just let us know at least 24 hours in advance and we'll be happy to reschedule your consultation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Do you work with international clients?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We work with clients worldwide and can accommodate different time zones for consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
