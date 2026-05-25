import { UtilityBar } from "./UtilityBar";
import { MainNav } from "./MainNav";

interface HeaderProps {
  /** Active main-nav tab. */
  activeNav?: string;
}

/** Full site header: dark utility strip + white main nav. */
export function Header({ activeNav = "Home" }: HeaderProps) {
  return (
    <header className="w-full">
      <UtilityBar />
      <MainNav active={activeNav} />
    </header>
  );
}
