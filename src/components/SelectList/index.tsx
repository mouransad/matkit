import { useState, type FC } from "react";
import { Select, Option, OptionGroup } from "@components/select";
import type { Color, Size } from "@components/select/types";
import CallIn from "@icons/CallIn";
import styles from "./styles.module.css";

const colors: Color[] = ["primary", "secondary", "tertiary"];
const sizes: Size[] = ["small", "medium", "large"];

const SelectList: FC = () => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (key: string) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.container}>
      {/* Basic states by color */}
      {colors.map((color) => (
        <div key={color} className={styles.variantGroup}>
          <span className={styles.groupTitle}>Select - {color}</span>

          {/* Default */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Default</span>
            {sizes.map((size) => (
              <Select
                key={`${color}-${size}-default`}
                color={color}
                size={size}
                label="Country"
                placeholder="Select a country"
                value={values[`${color}-${size}-default`]}
                onChange={handleChange(`${color}-${size}-default`)}
              >
                <Option value="us">United States</Option>
                <Option value="uk">United Kingdom</Option>
                <Option value="ca">Canada</Option>
                <Option value="au">Australia</Option>
              </Select>
            ))}
          </div>

          {/* With helper text */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Helper Text</span>
            {sizes.map((size) => (
              <Select
                key={`${color}-${size}-helper`}
                color={color}
                size={size}
                label="Language"
                placeholder="Select language"
                helperText="Choose your preferred language"
                value={values[`${color}-${size}-helper`]}
                onChange={handleChange(`${color}-${size}-helper`)}
              >
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
                <Option value="de">German</Option>
              </Select>
            ))}
          </div>

          {/* Error state */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Error</span>
            {sizes.map((size) => (
              <Select
                key={`${color}-${size}-error`}
                color={color}
                size={size}
                label="Status"
                placeholder="Select status"
                error
                errorText="Please select a valid status"
                value={values[`${color}-${size}-error`]}
                onChange={handleChange(`${color}-${size}-error`)}
              >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="pending">Pending</Option>
              </Select>
            ))}
          </div>

          {/* Disabled */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Disabled</span>
            {sizes.map((size) => (
              <Select
                key={`${color}-${size}-disabled`}
                color={color}
                size={size}
                label="Category"
                placeholder="Select category"
                disabled
              >
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
              </Select>
            ))}
          </div>

          {/* Disabled with value */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Disabled + Value</span>
            {sizes.map((size) => (
              <Select
                key={`${color}-${size}-disabled-value`}
                color={color}
                size={size}
                label="Timezone"
                defaultValue="utc"
                disabled
              >
                <Option value="utc">UTC</Option>
                <Option value="est">EST</Option>
                <Option value="pst">PST</Option>
              </Select>
            ))}
          </div>
        </div>
      ))}

      {/* With Option Groups */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>Select - Option Groups</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Grouped Options</span>
          {sizes.map((size) => (
            <Select
              key={`grouped-${size}`}
              color="primary"
              size={size}
              label="Role"
              placeholder="Select a role"
              value={values[`grouped-${size}`]}
              onChange={handleChange(`grouped-${size}`)}
            >
              <OptionGroup label="Admin">
                <Option value="super-admin">Super Admin</Option>
                <Option value="admin">Admin</Option>
              </OptionGroup>
              <OptionGroup label="User">
                <Option value="editor">Editor</Option>
                <Option value="viewer">Viewer</Option>
                <Option value="guest">Guest</Option>
              </OptionGroup>
            </Select>
          ))}
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Disabled Group</span>
          {sizes.map((size) => (
            <Select
              key={`disabled-group-${size}`}
              color="primary"
              size={size}
              label="Plan"
              placeholder="Select a plan"
              value={values[`disabled-group-${size}`]}
              onChange={handleChange(`disabled-group-${size}`)}
            >
              <OptionGroup label="Free Tier">
                <Option value="free">Free</Option>
              </OptionGroup>
              <OptionGroup label="Premium (Coming Soon)" disabled>
                <Option value="pro">Pro</Option>
                <Option value="enterprise">Enterprise</Option>
              </OptionGroup>
            </Select>
          ))}
        </div>
      </div>

      {/* With Leading Icon */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>Select - Icons</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Leading Icon</span>
          {sizes.map((size) => (
            <Select
              key={`icon-${size}`}
              color="primary"
              size={size}
              label="Contact"
              placeholder="Select contact"
              leadingIcon={<CallIn />}
              value={values[`icon-${size}`]}
              onChange={handleChange(`icon-${size}`)}
            >
              <Option value="john">John Doe</Option>
              <Option value="jane">Jane Smith</Option>
              <Option value="bob">Bob Johnson</Option>
            </Select>
          ))}
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Icon + Error</span>
          {sizes.map((size) => (
            <Select
              key={`icon-error-${size}`}
              color="primary"
              size={size}
              label="Assignee"
              placeholder="Select assignee"
              leadingIcon={<CallIn />}
              error
              errorText="Assignee is required"
              value={values[`icon-error-${size}`]}
              onChange={handleChange(`icon-error-${size}`)}
            >
              <Option value="team1">Team Alpha</Option>
              <Option value="team2">Team Beta</Option>
            </Select>
          ))}
        </div>
      </div>

      {/* Disabled Options */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>Select - Disabled Options</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Some Disabled</span>
          {sizes.map((size) => (
            <Select
              key={`disabled-options-${size}`}
              color="primary"
              size={size}
              label="Priority"
              placeholder="Select priority"
              value={values[`disabled-options-${size}`]}
              onChange={handleChange(`disabled-options-${size}`)}
            >
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high" disabled>
                High (Unavailable)
              </Option>
              <Option value="critical" disabled>
                Critical (Unavailable)
              </Option>
            </Select>
          ))}
        </div>
      </div>

      {/* Pre-selected value */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>Select - Pre-selected</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Default Value</span>
          {colors.map((color) => (
            <Select
              key={`preselected-${color}`}
              color={color}
              label={`${color} select`}
              defaultValue="option2"
            >
              <Option value="option1">Option One</Option>
              <Option value="option2">Option Two</Option>
              <Option value="option3">Option Three</Option>
            </Select>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectList;
