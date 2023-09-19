interface UniqueBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface BlueStar extends UniqueBtn {
  children: React.ReactNode;
}
interface KindCougar extends UniqueBtn {
  children: React.ReactNode;
  title: string;
}
interface SpaceBtn extends UniqueBtn {
  title: string;
}
