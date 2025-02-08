/*
  Dodaj typowanie propsa children dla TripleContainer, które wymusi przekazanie dokładnie trzech komponentów lub elementów HTML.
*/

type Props = {
  children: [React.ReactElement, React.ReactElement, React.ReactElement];
}

const TripleContainer = ({ children }: Props) => <ul className="list-disc">{children}</ul>;

const App = () => (
  <TripleContainer>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </TripleContainer>
);

export default App;

export { TripleContainer };
