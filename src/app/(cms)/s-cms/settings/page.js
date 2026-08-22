"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { 
  Settings, Users, Shield, Save, CheckCircle, AlertCircle, X, Plus, Trash2
} from "lucide-react";
import { useAuthStore } from "@/cms/store/authStore";

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "", type: "success" });
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    websiteName: "Sharda Academy",
    supportEmail: "support@shardaacademy.com",
    maintenanceMode: false
  });

  // Admin Management State
  const [admins, setAdmins] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "", password: "" });
  const [isSubmittingAdmin, setIsSubmittingAdmin] = useState(false);

  // Custom Modal States
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, id: null, email: null });
  const [alertModal, setAlertModal] = useState({ isOpen: false, message: "", type: "error" }); // type can be 'error' or 'info'

  useEffect(() => {
    fetchSettings();
    fetchAdmins();
  }, []);

  const fetchSettings = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/cms/system/settings`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data) setSettings(data.data);
      })
      .catch(err => console.error("Failed to load settings:", err));
  };

  const fetchAdmins = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/auth/admins`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setAdmins(data.data);
        }
      })
      .catch(err => console.error("Failed to load admins:", err));
  };

  const displayToast = (title, description, type = "success") => {
    setToastMessage({ title, description, type });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const showAlert = (message, type = "error") => {
    setAlertModal({ isOpen: true, message, type });
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/cms/system/settings`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: settings })
      });
      if (response.ok) {
        displayToast("Settings Saved Successfully", "Your updates have been applied.");
      } else {
        showAlert("Failed to save settings.");
      }
    } catch (error) {
      console.error(error);
      showAlert("Error saving settings.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setIsSubmittingAdmin(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/auth/admins`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdmin)
      });
      const data = await response.json();
      if (response.ok) {
        setAdmins([...admins, data.data]);
        setShowAddModal(false);
        setNewAdmin({ name: "", email: "", password: "" });
        displayToast("Admin Added", `${newAdmin.name} has been added successfully.`);
      } else {
        showAlert(data.message || "Failed to add admin.");
      }
    } catch (error) {
      console.error(error);
      showAlert("Error adding admin.");
    } finally {
      setIsSubmittingAdmin(false);
    }
  };

  const triggerRemoveAdmin = (id, email) => {
    if (email === 'sharda.academyofficial@gmail.com') {
      showAlert("You cannot remove the primary Super Admin.", "error");
      return;
    }
    if (email === user?.email) {
      showAlert("You cannot remove yourself while logged in.", "error");
      return;
    }
    setDeleteConfirm({ isOpen: true, id, email });
  };

  const executeRemoveAdmin = async () => {
    const { id, email } = deleteConfirm;
    setDeleteConfirm({ isOpen: false, id: null, email: null });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/auth/admins/${id}`, {
        credentials: "include",
        method: "DELETE"
      });
      if (response.ok) {
        setAdmins(admins.filter(a => a._id !== id));
        displayToast("Admin Removed", `The admin ${email} has been removed.`);
      } else {
        const data = await response.json();
        showAlert(data.message || "Failed to remove admin.");
      }
    } catch (error) {
      console.error(error);
      showAlert("Error removing admin.");
    }
  };

  return (
    <PageContainer>
      {/* Custom UI Toast */}
      {showToast && (
        <div className={`fixed top-20 right-4 z-[9999] animate-fade-in-up flex items-center gap-3 bg-white border ${toastMessage.type === 'success' ? 'border-green-200' : 'border-red-200'} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-xl p-4 min-w-[300px]`}>
          {toastMessage.type === 'success' ? (
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
          )}
          <div>
            <h4 className="text-sm font-bold text-slate-800">{toastMessage.title}</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">{toastMessage.description}</p>
          </div>
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row gap-6 mb-6 items-start lg:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">System Settings</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Configure CMS preferences and admin users</p>
        </div>
        {activeTab === "general" && (
          <button 
            onClick={handleSaveSettings}
            disabled={isSaving}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#f1af3c] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-70"
          >
            {isSaving ? <span className="animate-spin text-lg">↻</span> : <Save className="w-4 h-4" />}
            {isSaving ? "Saving..." : "Save Settings"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar - Tabs */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Settings Menu</h3>
            </div>
            <div className="flex flex-col p-2">
              <button onClick={() => setActiveTab("general")} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left ${activeTab === "general" ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-navy border border-transparent"}`}>
                <Settings className={`w-4 h-4 ${activeTab === "general" ? "text-blue-500" : "text-slate-400"}`} />
                <span className="uppercase tracking-wider">General</span>
              </button>
              <button onClick={() => setActiveTab("users")} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left ${activeTab === "users" ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-navy border border-transparent"}`}>
                <Users className={`w-4 h-4 ${activeTab === "users" ? "text-blue-500" : "text-slate-400"}`} />
                <span className="uppercase tracking-wider">Admin Users</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-9 space-y-6">
          
          {activeTab === "general" && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 animate-fade-in-up">
              <div className="mb-6 pb-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#f1af3c]" /> General Settings
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Website Name</label>
                  <input type="text" value={settings.websiteName} onChange={(e) => setSettings({...settings, websiteName: e.target.value})} className="w-full max-w-md px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Support Email</label>
                  <input type="email" value={settings.supportEmail} onChange={(e) => setSettings({...settings, supportEmail: e.target.value})} className="w-full max-w-md px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="maintenance" checked={settings.maintenanceMode} onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})} className="w-4 h-4 rounded text-[#f1af3c] focus:ring-[#f1af3c] border-slate-300 cursor-pointer" />
                  <label htmlFor="maintenance" className="text-xs font-bold text-slate-700 cursor-pointer">Enable Maintenance Mode</label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 pb-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#f1af3c]" /> CMS Admins
                </h2>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Plus className="w-3 h-3" /> Add Admin
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-slate-100">
                       <th className="pb-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">User</th>
                       <th className="pb-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                       <th className="pb-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {admins.map((admin) => {
                      const isSuperAdmin = admin.email === 'sharda.academyofficial@gmail.com';
                      const isCurrentUser = admin.email === user?.email;
                      return (
                        <tr key={admin._id}>
                          <td className="py-4">
                            <div className="font-bold text-xs text-navy">{admin.name}</div>
                            <div className="text-[10px] font-semibold text-slate-500">{admin.email}</div>
                          </td>
                          <td className="py-4">
                            {isSuperAdmin ? (
                              <span className="text-[9px] font-black uppercase tracking-wider bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-100">Super Admin</span>
                            ) : (
                              <span className="text-[9px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">Admin</span>
                            )}
                          </td>
                          <td className="py-4 text-right">
                             {isCurrentUser ? (
                               <span className="text-[10px] font-bold text-slate-400">Current User</span>
                             ) : isSuperAdmin ? (
                               <span className="text-[10px] font-bold text-slate-300">Protected</span>
                             ) : (
                               <button 
                                 onClick={() => triggerRemoveAdmin(admin._id, admin.email)}
                                 className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors inline-flex"
                                 title="Remove Admin"
                               >
                                 <Trash2 className="w-4 h-4" />
                               </button>
                             )}
                          </td>
                        </tr>
                      );
                    })}
                    {admins.length === 0 && (
                      <tr>
                        <td colSpan="3" className="py-8 text-center text-xs font-medium text-slate-500">Loading admins...</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-slide-up">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-black text-navy uppercase tracking-wider text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#f1af3c]" /> Add New Admin
              </h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-600 bg-white rounded-full border border-slate-200">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddAdmin} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={newAdmin.name}
                  onChange={e => setNewAdmin({...newAdmin, name: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]"
                  placeholder="e.g. Sudeep"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  value={newAdmin.email}
                  onChange={e => setNewAdmin({...newAdmin, email: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]"
                  placeholder="admin@shardaacademy.com"
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Default Password</label>
                <input 
                  type="password" 
                  value={newAdmin.password}
                  onChange={e => setNewAdmin({...newAdmin, password: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]"
                  placeholder="Must be changed by user later"
                  required 
                />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-navy">Cancel</button>
                <button type="submit" disabled={isSubmittingAdmin} className="px-5 py-2.5 bg-navy text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-navy-light disabled:opacity-70 transition-colors">
                  {isSubmittingAdmin ? "Adding..." : "Add Admin"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-slide-up text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-navy text-lg mb-2">Remove Admin</h3>
              <p className="text-xs text-slate-500 font-semibold mb-6">
                Are you sure you want to revoke CMS access for <span className="text-slate-800 font-bold">{deleteConfirm.email}</span>? This action cannot be undone.
              </p>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => setDeleteConfirm({ isOpen: false, id: null, email: null })}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors w-full"
                >
                  Cancel
                </button>
                <button 
                  onClick={executeRemoveAdmin}
                  className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-colors w-full shadow-lg shadow-red-500/30"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {alertModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-slide-up text-center">
            <div className="p-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${alertModal.type === 'error' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-black text-navy text-lg mb-2">
                {alertModal.type === 'error' ? 'Action Denied' : 'Notification'}
              </h3>
              <p className="text-sm text-slate-600 font-medium mb-6">
                {alertModal.message}
              </p>
              <button 
                onClick={() => setAlertModal({ isOpen: false, message: "", type: "error" })}
                className="px-6 py-2.5 bg-navy text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-navy-light transition-colors w-full shadow-lg shadow-navy/20"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </PageContainer>
  );
}
