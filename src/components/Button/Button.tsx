import React from "react";
import "./Button.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

interface ButtonProps {
  /**
   * Màu chính button
   */
  primary?: boolean;
  /**
   * Thuộc tính block của button
   */
  block?: boolean;
  /**
   * Thuộc tính đổi màu backgroundColor
   */
  backgroundColor?: string;
  /**
   * Kiểu loại button
   */
  typeBtn?: 'outline' | 'defaul';
  /**
   * Kích cỡ button
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Nội dung button
   */
  label: string,
  /**
   * Icon button
   */
  icon?: string,
  /**
   * Một số màu mặc định
   */
  color?: 'green' | 'red' | 'yellow' | 'purple' | 'green-outline' | 'red-outline' | 'yellow-outline' | 'purple-outline'
}

const Button = ({
  primary = false,
  block = false,
  typeBtn = 'defaul',
  size = 'medium',
  backgroundColor,
  color,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'defaultBtn' : 'alternativeBtn';
  const modeblock = block ? "displayBlock" : ""
  const typeButton = typeBtn === 'outline' ? 'defaultBtnOutline' : mode
  return <button
    type="button"
    className={[typeButton, size, color, typeBtn, modeblock].join(' ')}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
    <FontAwesomeIcon icon={solid('user-secret')} />
    {/* <FontAwesomeIcon icon={solid('fa-brands')} /> */}
    {/* <FontAwesomeIcon icon="fa-brands fa-500px" /> */}
    {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
  </button>
};

export default Button