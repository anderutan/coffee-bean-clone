import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

type Props = {
  pathArray: string[];
  title?: string;
};

const PageBreadcrumb = ({ pathArray, title }: Props) => {
  return (
    <>
      <Breadcrumb className='py-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathArray.map((path, index) => {
            const isLast = index === pathArray.length - 1;
            const fullPath = `/${pathArray.slice(0, index + 1).join('/')}`;

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className={`capitalize font-semibold`}>
                      {title ? title : path}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={fullPath} className='capitalize '>
                      {title ? title : path}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default PageBreadcrumb;
