import React,{ FC, useState } from "react";
import DisplayItem, { DisplayItemProps } from "./display-item";

export interface ItemProps
    extends Omit<DisplayItemProps, "open" | "dropdown" | "defaultOpen"> {
    id: string;
    selected?: boolean;
}

export interface MenuProps extends Omit<DisplayItemProps, "dropdown"> {
    id: string;
    items?: ItemProps[];
    defaultOpen?: boolean;
}

export const Menu: FC<MenuProps> = ({
    id,
    title,
    badgeValue,
    icon,
    items = [],
    open,
    defaultOpen = false,
    onClick,
    ...restProps
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const openStatus = open ?? isOpen;
    const setOpen = setIsOpen;
    return (
        <>
            <DisplayItem
                title={title}
                badgeValue={badgeValue}
                dropdown={true}
                open={openStatus}
                icon={icon}
                onClick={event => {
                    setOpen(!openStatus);
                    onClick?.(event);
                }}
                onIconClick={() => {
                    setOpen(!openStatus);
                }}
                {...restProps}
            />
            {openStatus && (
                <div>
                    {items.map(props => (
                        <Item {...props} />
                    ))}
                </div>
            )}
        </>
    );
};

export const Item: FC<Omit<DisplayItemProps, "open" | "dropdown">> = props => (
    <DisplayItem {...props} />
);

export default Menu;