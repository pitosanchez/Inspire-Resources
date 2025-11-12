/**
 * Announcement Banner - Urgent Updates & Emergency Contact
 * Dismissible banner for important patient communications
 */

import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Set this to false to hide the banner when there are no announcements
  const hasAnnouncement = true;
  const isEmergency = false; // Set to true for urgent medical alerts

  if (!isVisible || !hasAnnouncement) return null;

  return (
    <div
      className={`relative ${
        isEmergency ? "bg-red-600" : "bg-brand-600"
      } text-white py-3 px-4`}
      role="alert"
      aria-live="polite"
    >
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {isEmergency && (
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
            <span className="font-semibold">
              {isEmergency ? "URGENT:" : "Important Update:"}
            </span>
            <span>
              24/7 Transplant Support Line:{" "}
              <a
                href="tel:+15551234567"
                className="underline hover:text-white/80 font-semibold"
              >
                (555) 123-4567
              </a>
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 p-1 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Close announcement"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
