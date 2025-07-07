import React, { useMemo } from 'react';
import { BookOpen, CircleHelp, Cog, File, House, Newspaper, Split } from 'lucide-react';
import ItemIcon from './ItemIcon';
import '../../index.css';

const MenuIcons = () => {
  const iconItems = useMemo(
    () => [
      { Icon: House },
      { Icon: File },
      { Icon: Newspaper },
      { Icon: BookOpen },
      { Icon: Split },
      { Icon: Cog },
      { Icon: CircleHelp },
    ],
    [],
  );

  return (
    <div className="col-md-3 d-none d-md-block">
      <ul className="nav flex-column py-3 dark-purple">
        {iconItems.map(({ Icon }, index) => (
          <ItemIcon key={index} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
};

export default MenuIcons;
