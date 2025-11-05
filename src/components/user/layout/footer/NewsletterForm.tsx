import { useState } from "react";
import { useTranslations } from "next-intl";
import { validateEmail } from "@/utils/validates";

export default function NewsLetterForm() {
  const t = useTranslations('Footer');
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!validateEmail(email)) {
      setError(t('invalidEmail'));
      return;
    }

    setError("");
    setLoading(true);
    setMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage({ type: 'success', text: t('newsletterSuccess') });
      setEmail("");
    } catch (err) {
      setMessage({ type: 'error', text: t('newsletterError') });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full md:w-[30%]">
      <h3 className="font-semibold text-lg">{t('joinNewsletter')}</h3>

      <form
        className="flex flex-col items-start gap-2 bg-indigo-50/30 rounded-md overflow-hidden shadow-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center w-full">
          <input
            type="email"
            required
            placeholder={t('emailPlaceholder')}
            className="flex-grow p-2 text-sm bg-transparent outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 text-sm font-medium hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? t('subscribing') : t('subscribe')}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-xs px-2">{error}</p>}
      {message && (
        <p className={`${message.type === 'success' ? 'text-green-500' : 'text-red-500'} text-xs px-2`}>
          {message.text}
        </p>
      )}

      <p className="text-xs text-gray-500">{t('newsletterHint')}</p>
    </div>
  )
}
