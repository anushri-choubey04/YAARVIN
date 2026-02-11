import GoogleIcon from "@mui/icons-material/Google";

export default function SocialLogin({ onGoogleLogin }) {
  return (
    <div className="space-y-3">
      <button
        onClick={onGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border border-gray-600 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <div className="flex items-center gap-2 text-gray-600 text-sm">
        <div className="flex-1 h-px bg-gray-300" />
        OR
        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </div>
  );
}
