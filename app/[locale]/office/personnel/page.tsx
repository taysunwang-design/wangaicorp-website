import OfficeLayout from "../components/OfficeLayout";
import { personnel } from "../../../lib/personnel";

export default function OfficePersonnelPage() {
  return (
    <OfficeLayout title="Personnel" label="Virtual Office Team">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Personnel Database</h2>
            <p className="office-panel-subtitle">
              Internal Wang Corp personnel records. This section will later
              manage access, roles, contact information, office permissions,
              and two-step verification settings.
            </p>
          </div>

          <button>Add Personnel</button>
        </div>

        <div className="office-personnel-grid">
          {personnel.map((person) => (
            <div className="office-personnel-card" key={person.id}>
              <div className="office-personnel-card-header">
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.chineseName}</p>
                </div>

                <span>{person.status}</span>
              </div>

              <div className="office-personnel-details">
                <p>
                  <strong>Role:</strong> {person.role} / {person.roleZh}
                </p>

                <p>
                  <strong>Email:</strong> {person.email}
                </p>

                {person.phones.map((phone) => (
                  <p key={phone.number}>
                    <strong>{phone.label}:</strong> {phone.number}
                  </p>
                ))}

                <p>
                  <strong>Access Level:</strong> {person.accessLevel}
                </p>
              </div>

              <div className="office-personnel-actions">
                <button>View Profile</button>
                <button>Edit Access</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Access Rules</h2>
          </div>

          <div className="office-empty-state">
            Only active personnel should be able to access the Office. Later,
            each person will have their own password, SMS verification phone,
            role permissions, and secure session history.
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future Personnel Tools</h2>
          </div>

          <div className="office-actions">
            <button>Invite Personnel</button>
            <button>Reset Password</button>
            <button>Update Phone</button>
            <button>Manage 2FA</button>
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}