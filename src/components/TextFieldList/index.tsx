import { useState, type FC } from "react";
import TextField from "@components/textField";
import type { Color, Size } from "@components/textField/types";
import CallIn from "@icons/CallIn";
import CallOut from "@icons/CallOut";
import styles from "./styles.module.css";

const colors: Color[] = ["primary", "secondary", "tertiary"];
const sizes: Size[] = ["small", "medium", "large"];

const TextFieldList: FC = () => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  return (
    <div className={styles.container}>
      {/* Basic states by color */}
      {colors.map((color) => (
        <div key={color} className={styles.variantGroup}>
          <span className={styles.groupTitle}>TextField - {color}</span>

          {/* Default */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Default</span>
            {sizes.map((size) => (
              <TextField
                autoComplete="off"
                key={`${color}-${size}-default`}
                color={color}
                size={size}
                label="LabelLabelLabelLabelLabelLabel"
                placeholder="Placeholder"
                value={values[`${color}-${size}-default`] ?? ""}
                onChange={handleChange(`${color}-${size}-default`)}
              />
            ))}
          </div>

          {/* With helper text */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Helper Text</span>
            {sizes.map((size) => (
              <TextField
                autoComplete="off"
                key={`${color}-${size}-helper`}
                color={color}
                size={size}
                label="Label"
                placeholder="Placeholder"
                helperText="This is helper text"
                value={values[`${color}-${size}-helper`] ?? ""}
                onChange={handleChange(`${color}-${size}-helper`)}
              />
            ))}
          </div>

          {/* Error state */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Error</span>
            {sizes.map((size) => (
              <TextField
                autoComplete="off"
                key={`${color}-${size}-error`}
                color={color}
                size={size}
                label="Label"
                placeholder="Placeholder"
                error
                errorText="This field has an error"
                value={values[`${color}-${size}-error`] ?? ""}
                onChange={handleChange(`${color}-${size}-error`)}
              />
            ))}
          </div>

          {/* Disabled */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Disabled</span>
            {sizes.map((size) => (
              <TextField
                autoComplete="off"
                key={`${color}-${size}-disabled`}
                color={color}
                size={size}
                label="Label"
                placeholder="Placeholder"
                disabled
              />
            ))}
          </div>

          {/* Disabled with value */}
          <div className={styles.fieldsGroup}>
            <span className={styles.label}>Disabled + Value</span>
            {sizes.map((size) => (
              <TextField
                autoComplete="off"
                key={`${color}-${size}-disabled-value`}
                color={color}
                size={size}
                label="Label"
                defaultValue="Some value"
                disabled
              />
            ))}
          </div>
        </div>
      ))}

      {/* With Icons */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>TextField - Icons</span>

        {/* Leading icon */}
        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Leading Icon</span>
          {sizes.map((size) => (
            <TextField
              autoComplete="off"
              key={`icon-leading-${size}`}
              color="primary"
              size={size}
              label="Phone"
              placeholder="Enter phone"
              leadingIcon={<CallIn />}
              value={values[`icon-leading-${size}`] ?? ""}
              onChange={handleChange(`icon-leading-${size}`)}
            />
          ))}
        </div>

        {/* Trailing icon */}
        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Trailing Icon</span>
          {sizes.map((size) => (
            <TextField
              autoComplete="off"
              key={`icon-trailing-${size}`}
              color="primary"
              size={size}
              label="Phone"
              placeholder="Enter phone"
              trailingIcon={<CallOut />}
              value={values[`icon-trailing-${size}`] ?? ""}
              onChange={handleChange(`icon-trailing-${size}`)}
            />
          ))}
        </div>

        {/* Both icons */}
        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Both Icons</span>
          {sizes.map((size) => (
            <TextField
              autoComplete="off"
              key={`icon-both-${size}`}
              color="primary"
              size={size}
              label="Phone"
              placeholder="Enter phone"
              leadingIcon={<CallIn />}
              trailingIcon={<CallOut />}
              value={values[`icon-both-${size}`] ?? ""}
              onChange={handleChange(`icon-both-${size}`)}
            />
          ))}
        </div>

        {/* Icons with error */}
        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Icons + Error</span>
          {sizes.map((size) => (
            <TextField
              autoComplete="off"
              key={`icon-error-${size}`}
              color="primary"
              size={size}
              label="Phone"
              placeholder="Enter phone"
              leadingIcon={<CallIn />}
              trailingIcon={<CallOut />}
              error
              errorText="Invalid phone number"
              value={values[`icon-error-${size}`] ?? ""}
              onChange={handleChange(`icon-error-${size}`)}
            />
          ))}
        </div>
      </div>

      {/* Input types */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>TextField - Input Types</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Text</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Username"
            placeholder="Enter username"
            type="text"
            value={values["type-text"] ?? ""}
            onChange={handleChange("type-text")}
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Password</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Password"
            placeholder="Enter password"
            type="password"
            value={values["type-password"] ?? ""}
            onChange={handleChange("type-password")}
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Email</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Email"
            placeholder="example@email.com"
            type="email"
            value={values["type-email"] ?? ""}
            onChange={handleChange("type-email")}
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Number</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Age"
            placeholder="Enter age"
            type="number"
            value={values["type-number"] ?? ""}
            onChange={handleChange("type-number")}
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Tel</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Phone"
            placeholder="+1 (555) 000-0000"
            type="tel"
            value={values["type-tel"] ?? ""}
            onChange={handleChange("type-tel")}
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Search</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Search"
            placeholder="Search..."
            type="search"
            value={values["type-search"] ?? ""}
            onChange={handleChange("type-search")}
          />
        </div>
      </div>

      {/* Pre-filled values */}
      <div className={styles.variantGroup}>
        <span className={styles.groupTitle}>TextField - Pre-filled</span>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>With Value</span>
          {colors.map((color) => (
            <TextField
              autoComplete="off"
              key={`prefilled-${color}`}
              color={color}
              label="Name"
              defaultValue="John Doe"
            />
          ))}
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Long Value</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Description"
            defaultValue="This is a very long value that might overflow the input field"
          />
        </div>

        <div className={styles.fieldsGroup}>
          <span className={styles.label}>Required</span>
          <TextField
            autoComplete="off"
            color="primary"
            label="Required Field"
            placeholder="This field is required"
            required
            value={values["required"] ?? ""}
            onChange={handleChange("required")}
          />
        </div>
      </div>
    </div>
  );
};

export default TextFieldList;
