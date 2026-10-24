// Topic: Switch...Case Statement

function getRolePermissions(role) {
  switch (role) {
    case 'admin':
    case 'superadmin': // Intentional fall-through
      return ['read', 'write', 'delete', 'manage_users'];
    case 'editor':
      return ['read', 'write'];
    case 'viewer':
      return ['read'];
    default:
      return [];
  }
}

console.log("Admin perms:", getRolePermissions('admin'));
console.log("Viewer perms:", getRolePermissions('viewer'));

// Modern Object Dictionary Alternative
const statusColors = {
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
};

const getStatusColor = (status) => statusColors[status] || '#6B7280';
console.log("Error color:", getStatusColor('error'));
