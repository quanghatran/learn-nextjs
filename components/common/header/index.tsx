import { HeaderDeskTop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDeskTop />
    </>
  );
}
