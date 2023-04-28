import { Button } from 'components/Button/Button';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
export default function UserMenu() {
  const { user } = useAuthSelect();
  return (
    <div>
      <p> Wellcome {user.name} </p>
      <Button> Logout </Button>
    </div>
  );
}
