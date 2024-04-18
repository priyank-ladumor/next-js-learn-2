export default function PhotoLayout({
    children,
    modal
  }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={""}>{modal}</body>
        <body className={""}>{children}</body>
      </html>
    );
  }
  