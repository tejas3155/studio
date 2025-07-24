
'use client';

import * as React from 'react';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 4) {
    return "Working late?";
  }
  if (hour < 12) {
    return "Good Morning";
  }
  if (hour < 17) {
    return "Good Afternoon";
  }
  return "Good Evening";
}

export function Greeting() {
  const [greeting, setGreeting] = React.useState("");

  React.useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  if (!greeting) {
    return <h1 className="text-2xl font-bold tracking-tight font-headline h-8 w-48 bg-muted animate-pulse rounded-md" />;
  }

  return (
    <h1 className="text-2xl font-bold tracking-tight font-headline">{greeting}</h1>
  );
}
