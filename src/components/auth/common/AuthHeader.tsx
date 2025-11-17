import Logo from '@/components/commons/Logo';

interface AuthHeaderProps {
  title: string;
  description: string;
  logoColor?: 'black' | 'white';
}

export default function AuthHeader({ title, description, logoColor = 'black' }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <Logo color={logoColor} />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
