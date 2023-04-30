import { useAuthSelect } from '../../hooks/UseAuthSelect';
export default function HomePage() {
  const { authError } = useAuthSelect();
  console.log(authError);
  return (
    <div>
      {authError ? (
        <p>You are not log in </p>
      ) : (
        <h1>
          wellcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      )}
    </div>
  );
}
