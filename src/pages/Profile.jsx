import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/signin');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_URL}/api/auth/profile`, config);
        setProfile(data);
      } catch (err) {
        setError('Failed to load profile. Please sign in again.');
        localStorage.removeItem('token');
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cb-gray-bg">
        <div className="text-[16px] text-cb-muted font-medium">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cb-gray-bg">
        <div className="text-[16px] text-cb-negative font-medium">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-cb-gray-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[32px] font-bold text-cb-text tracking-tight">Your Profile</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-6 py-2.5 border border-cb-border text-[14px] font-bold rounded-full shadow-sm text-cb-text bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cb-border transition-colors"
          >
            Sign out
          </button>
        </div>

        <div className="bg-cb-bg shadow-[0_2px_10px_rgb(0,0,0,0.02)] sm:rounded-[16px] border border-cb-border overflow-hidden mb-8">
          <div className="px-6 py-6 border-b border-cb-border">
            <h3 className="text-[20px] leading-6 font-bold text-cb-text">Personal Details</h3>
            <p className="mt-1.5 text-[14px] font-medium text-cb-muted">Information about your active account.</p>
          </div>
          <div className="px-6 py-2">
            <dl>
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 border-b border-cb-border last:border-b-0">
                <dt className="text-[14px] font-semibold text-cb-muted">Legal name</dt>
                <dd className="mt-1 text-[15px] font-medium text-cb-text sm:mt-0 sm:col-span-2">{profile?.name}</dd>
              </div>
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 border-b border-cb-border last:border-b-0">
                <dt className="text-[14px] font-semibold text-cb-muted">Email address</dt>
                <dd className="mt-1 text-[15px] font-medium text-cb-text sm:mt-0 sm:col-span-2">{profile?.email}</dd>
              </div>
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 border-b border-cb-border last:border-b-0">
                <dt className="text-[14px] font-semibold text-cb-muted">Account created</dt>
                <dd className="mt-1 text-[15px] font-medium text-cb-text sm:mt-0 sm:col-span-2">
                  {new Date(profile?.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-cb-bg shadow-[0_2px_10px_rgb(0,0,0,0.02)] sm:rounded-[16px] border border-cb-border overflow-hidden">
          <div className="px-6 py-6 flex justify-between items-center">
            <div>
              <h3 className="text-[20px] leading-6 font-bold text-cb-text">Developer Tools</h3>
              <p className="mt-1.5 text-[14px] font-medium text-cb-muted">Manage the cryptocurrencies displayed on the platform.</p>
            </div>
            <button
              onClick={() => navigate('/add-crypto')}
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-[14px] font-bold rounded-full shadow-sm text-white bg-cb-blue hover:bg-cb-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cb-blue transition-colors"
            >
              Add Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
