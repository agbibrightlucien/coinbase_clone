import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-cb-gray-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[440px] w-full space-y-8 bg-cb-bg p-10 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cb-border">
        <div>
          <h2 className="mt-2 text-center text-[28px] font-bold text-cb-text">
            Create your account
          </h2>
          <p className="mt-3 text-center text-[15px] font-medium text-cb-muted">
            Already have an account?{' '}
            <Link to="/signin" className="font-semibold text-cb-blue hover:text-cb-blue-hover transition-colors">
              Sign in
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-cb-negative/20 text-cb-negative px-4 py-3 rounded-[8px] text-[14px] font-medium" role="alert">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-[14px] font-semibold text-cb-text mb-1.5">Legal full name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-[8px] relative block w-full px-4 py-3.5 border border-cb-border placeholder-gray-400 text-cb-text focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] transition-colors"
              placeholder="First and last name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="block text-[14px] font-semibold text-cb-text mb-1.5">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-[8px] relative block w-full px-4 py-3.5 border border-cb-border placeholder-gray-400 text-cb-text focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] transition-colors"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-[14px] font-semibold text-cb-text mb-1.5">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-[8px] relative block w-full px-4 py-3.5 border border-cb-border placeholder-gray-400 text-cb-text focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] transition-colors"
              placeholder="Choose a strong password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent text-[16px] font-bold rounded-full text-white bg-cb-blue hover:bg-cb-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cb-blue disabled:opacity-50 transition-colors"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
