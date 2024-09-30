const Footer = () => {
  return (
    <div>
      <div className="border-t-2 border-gray-200">
        <div className="flex-col flex">
          <div className="w-full">
            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2023 Inventory All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
