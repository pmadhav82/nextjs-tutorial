export default function ErrorPage() {
  const number = Math.random() * 100;
  if (number > 50)
    throw new Error(
      `Error occored because the number is ${number} which is greater than 50`
    );
  return <> This is error showing page.</>;
}
