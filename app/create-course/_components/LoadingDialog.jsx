import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const LoadingDialog = ({loading}) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col justify-center items-center py-10">
                <Image src={'/loading.gif'} width={100} height={100} alt="loading" priority/>
                <h2 className="font-semibold text-medium">Loading ...</h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
       
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoadingDialog;
