import NavBar from 'components/NavBar';
import * as S from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <S.PageContent>{children}</S.PageContent>
    </>
  );
}
