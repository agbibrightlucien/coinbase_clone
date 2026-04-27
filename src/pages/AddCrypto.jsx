import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddCrypto() {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      change24h: parseFloat(formData.change24h)
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.post(`${API_URL}/api/crypto`, payload);
      setSuccess(`Successfully added ${res.data.name}! Redirecting...`);
      setFormData({ name: '', symbol: '', price: '', image: '', change24h: '' });
      setTimeout(() => navigate('/explore'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add cryptocurrency');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-cb-gray-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[500px] mx-auto">
        <button 
          onClick={() => navigate('/profile')} 
          className="mb-6 text-[14px] font-bold text-cb-blue hover:text-cb-blue-hover flex items-center gap-1"
        >
          <span>←</span> Back to Profile
        </button>

        <div className="bg-cb-bg p-8 sm:p-10 rounded-[16px] shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-cb-border">
          <h2 className="text-[28px] font-bold text-cb-text mb-2">Add New Asset</h2>
          <p className="text-[15px] font-medium text-cb-muted mb-8">List a new cryptocurrency on the platform.</p>
          
          {error && (
            <div className="mb-6 bg-red-50 border border-cb-negative/20 text-cb-negative px-4 py-3 rounded-[8px] text-[14px] font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 border border-cb-positive/20 text-cb-positive px-4 py-3 rounded-[8px] text-[14px] font-medium">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] font-semibold text-cb-text mb-1.5">Asset Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 border border-cb-border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] text-cb-text placeholder-gray-400 font-medium transition-colors"
                  placeholder="e.g., Bitcoin"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-[14px] font-semibold text-cb-text mb-1.5">Symbol</label>
                <input
                  type="text"
                  name="symbol"
                  required
                  className="w-full px-4 py-3.5 border border-cb-border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] text-cb-text placeholder-gray-400 font-medium transition-colors uppercase"
                  placeholder="e.g., BTC"
                  value={formData.symbol}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-cb-text mb-1.5">Price (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  step="any"
                  name="price"
                  required
                  className="w-full pl-8 pr-4 py-3.5 border border-cb-border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] text-cb-text placeholder-gray-400 font-medium transition-colors"
                  placeholder="64000.50"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-cb-text mb-1.5">Image URL</label>
              <input
                type="url"
                name="image"
                required
                className="w-full px-4 py-3.5 border border-cb-border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] text-cb-text placeholder-gray-400 font-medium transition-colors"
                placeholder="https://example.com/logo.png"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-cb-text mb-1.5">24h Change (%)</label>
              <input
                type="number"
                step="any"
                name="change24h"
                required
                className="w-full px-4 py-3.5 border border-cb-border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-cb-blue focus:border-cb-blue text-[15px] text-cb-text placeholder-gray-400 font-medium transition-colors"
                placeholder="e.g., 2.5 or -1.4"
                value={formData.change24h}
                onChange={handleChange}
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm text-[16px] font-bold text-white bg-cb-blue hover:bg-cb-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cb-blue disabled:opacity-50 transition-colors"
              >
                {loading ? 'Processing...' : 'List Asset'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCrypto;
