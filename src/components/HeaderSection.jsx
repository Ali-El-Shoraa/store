export default function HeaderSection({ title, subTitle }) {
  return (
    <h1 className="text-3xl font-bold space-x-2">
      <span>{title}</span>
      <span className="text-muted-foreground">{subTitle}</span>
    </h1>
  );
}
